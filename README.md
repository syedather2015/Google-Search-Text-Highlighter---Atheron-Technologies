# 🔍 Google Search Text Highlighter – Chrome Extension

This extension automatically highlights your **Google search terms** directly in the search results. Whether you're a researcher, analyst, or QA specialist, this tool helps you visually pinpoint and track matching keywords without scanning through lines of text.

> Developed by **Syed Ather Rizvi** under **Atheron Technologies**.

---

## ✨ Features

- ✅ Highlights exact search terms on Google results pages
- 🟥 Yellow background + red border for maximum visibility
- 🔄 Automatically re-applies highlights even after the DOM changes
- 🧠 Designed with MutationObserver for robust performance
- 🧩 Easy to install, lightweight, and works out-of-the-box

---

## 📷 Preview

![Demo Screenshot](./display.jpg) <!-- Replace with an animated GIF if available -->

---

## 🛠 How It Works

1. Loads the search query from Google's input field
2. Searches the page for all `<em>` tags (used by Google to wrap matches)
3. Replaces the content with a visually enhanced version of the search match
4. Uses a MutationObserver to ensure dynamic content (like infinite scroll or ads) is also processed

---

## 💡 Use Cases

- 🧪 **QA Professionals**: Easily verify keyword match presence  
- 🔎 **Researchers**: Quickly locate relevant information in search snippets  
- 🧠 **SEO Analysts**: Spot exact keyword placements in real-time  

---

## 🧩 Installation

1. Clone or download the repository
2. Open `chrome://extensions/` in Chrome
3. Enable **Developer Mode**
4. Click **Load unpacked** and select the extension folder
5. Reload a Google search page – your query will now be highlighted!

---

## 📄 Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- Chrome Extensions API  
- DOM MutationObserver  

---

## 🏢 Developed By

**Syed Ather Rizvi**  
📛 Atheron Technologies  
🌐 [www.atheron-tech.com](https://www.atheron-tech.com)

---

## 📃 License

MIT License © 2025 [Syed Ather Rizvi](https://github.com/syedather2015)

---

## 🙌 Acknowledgments

- Inspired by real-world challenges in data validation and QA workflows
- Built to support faster insights without page scanning fatigue
