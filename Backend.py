import requests

response = requests.post(
    "http://localhost:11434/api/generate",
    json={
        "model": "mistral",
        "prompt": "Explain quantum computing in simple terms.",
        "stream": False
    }
)

data = response.json()
print(data["response"])
#hej
#hi this code promtas a ai model called mistral. i would like the mistral model to be promted to give a question with 4 answer alternativs that are then transferd to the main.js file where the question and answers are used. 