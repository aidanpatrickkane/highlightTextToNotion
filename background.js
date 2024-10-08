chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "sendToNotion",
        title: "Send to Interesting Findings",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sendToNotion" && info.selectionText) {
        const selectedText = info.selectionText;
        const pageUrl = tab.url;

        sendToNotion(selectedText, pageUrl);
    }
});

async function sendToNotion(selectedText, pageUrl) {
    const notionToken = "YOUR_API_KEY_HERE";
    const pageId = "YOUR_PAGE_ID_HERE";

    const url = `https://api.notion.com/v1/blocks/${pageId}/children`;
    const headers = {
        "Authorization": `Bearer ${notionToken}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28"
    };

    const data = {
        "children": [
            {
                "object": "block",
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": selectedText
                            }
                        },
                        {
                            "type": "text",
                            "text": {
                                "content": " (Source)",
                                "link": {
                                    "url": pageUrl
                                }
                            }
                        }
                    ]
                }
            }
        ]
    };

    const response = await fetch(url, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(data)
    });

    if (response.ok) {
        console.log("Text successfully added to Notion");
    } else {
        console.error("Error adding text to Notion:");
    }
}
