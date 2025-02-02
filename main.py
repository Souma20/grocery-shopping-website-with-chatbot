from flask import Flask, request, jsonify
from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate
from flask_cors import CORS

app = Flask(__name__)

# Updated Prompt Template
template = """ 
You are a helpful assistant for a grocery shopping website.  answer questions related to the website, such as product availability, categories, or delivery or current news about the prices.You have the option to reply to a greeting for exapmle yo,sup dawg,hello,hi etc

Keep responses very short.

If unrelated, respond with: "I'm sorry, I cannot answer that or im not able to understand"
Here is the conversation history: {context}
Question: {question}
"""
CORS(app, origins="http://localhost:5173")

# Language Model Setup
model = OllamaLLM(model="llama3")
prompt = ChatPromptTemplate.from_template(template)
chain = prompt | model

# Products and Categories
categories = {
    "vegetables": ["tomato", "carrot", "spinach", "broccoli"],
    "fruits": ["apple", "banana", "orange", "grapes"],
    "dairy": ["milk", "cheese", "yoghurt", "butter"],
    "grains": ["rice", "wheat", "oats", "barley"]
}

# Route to Handle Queries
@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    context = data.get("context", "")
    question = data.get("question", "").lower()

    # Handle requests for product categories
    if "categories" in question or "available products" in question:
        response = "Categories: Vegetables, Fruits, Dairy, Grains."
        return jsonify({"response": response})

    # Handle product-specific queries
    for category, items in categories.items():
        for product in items:
            if product in question:
                response = f"{product.capitalize()} is in {category}."
                return jsonify({"response": response})

    # Default chatbot behavior
    result = chain.invoke({"context": context, "question": question})
    return jsonify({"response": str(result)})

if __name__ == "__main__":
    app.run(debug=True)

"""
from flask import Flask, request, jsonify
from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate
from flask_cors import CORS 


app = Flask(__name__)

template = 
You are a helpful assistant for a grocery shopping website. Answer the question below only if it is related to the grocery shopping website, including topics like product availability, shopping tips, payment methods, delivery options, and chatbot features. 

If the question is not related to the grocery shopping website, respond with "I can only answer questions related to the grocery shopping website."

Here is the conversation history: {context}
Question:{question}

CORS(app, origins="http://localhost:5173")


model = OllamaLLM(model="llama3")
prompt = ChatPromptTemplate.from_template(template)
chain = prompt | model

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    context = data.get("context", "")
    question = data.get("question", "")
    result = chain.invoke({"context": context, "question": question})
    return jsonify({"response": str(result)})

if __name__ == "__main__":
    app.run(debug=True)
"""
