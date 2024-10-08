# Notion Highlighter Chrome Extension

This Chrome extension allows you to highlight text on any webpage, right-click, and send the selected text along with a link to the source webpage to a specific Notion page.

## Features

- Right-click on selected text to send it to a Notion page.
- The selected text is saved to a Notion document along with a hyperlink to the webpage where the text was highlighted.
- Easily configurable to send text to different Notion pages by updating the page ID.

## Installation

1. Clone or download this repository to your local machine.
   
2. Go to `chrome://extensions/` in your Chrome browser.

3. Enable **Developer Mode** in the top-right corner.

4. Click on **Load unpacked** and select the directory containing this project.

## Configuration

### Update Notion Integration API Key

1. Create a Notion integration and get your API key from the [Notion Integrations](https://www.notion.so/my-integrations) page.
2. Update the API key in the `background.js` file:

   ```javascript
   const notionToken = "your_notion_integration_api_key"; // Replace with your Notion API key	