<!-- <div class="chat-window" id="chatWindow"> 
    <button class="close-btn" id="closeChat">&times;</button>
    <h3>Ask Algobasket AI</h3>
    <p style="min-height: 470px;">
        Welcome! How can I help you?
    </p> 
    <input type="text" class="form-control" placeholder="Ask me anything.."/>
</div> 
<div style="position: fixed;bottom:-40px;right:0" id="toggleChat">
    <img src="./assets/ask-chat-logo.png" style="width:200px"/> 
</div>    -->
<!-- Chat Window -->
<div class="chat-window" id="chatWindow">
    <button class="close-btn" id="closeChat">&times;</button>
    <h4>Ask Algobasket AI</h4>
    <div id="chatMessages" style="height: 476px; overflow-y: auto; padding: 10px;">
        <p><strong>AI:</strong> Welcome! How can I help you?</p>
    </div>
    <input type="text" class="form-control" id="userInput" placeholder="Ask me anything.." style="border-radius:0;margin:5px 0 0 0" />
    <p class="text-center" style="font-size: 12px;margin-top:1px;">Powered by Google Dialogflow AI</p>
</div> 

<!-- Toggle Chat Button -->
<div style="position: fixed; bottom: -35px; right: 5px;" id="toggleChat">
    <img src="./assets/ask-chat-logo.png" style="width: 200px; cursor: pointer;" />
</div>   
