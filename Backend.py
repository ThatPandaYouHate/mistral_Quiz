import requests
import json

# Modified prompt to request a multiple choice question
response = requests.post(
    "http://localhost:11434/api/generate",
    json={
        "model": "mistral",
        "prompt": """Generate a multiple choice question with 4 alternatives with only one correct answer in the following JSON format:
{
    "question": "Your question here",
    "alternatives": [
        {"id": "A", "text": "First alternative", "correct": true},
        {"id": "B", "text": "Second alternative", "correct": false},
        {"id": "C", "text": "Third alternative", "correct": false},
        {"id": "D", "text": "Fourth alternative", "correct": false}
    ]
}""",
        "stream": False
    }
)

data = response.json()
question_data = json.loads(data["response"])

# Write the question data to a file that main.js can read
with open('question_data.json', 'w') as f:
    json.dump(question_data, f)

print("Question data has been generated and saved to question_data.json")
#hej
#hi this code promtas a ai model called mistral. i would like the mistral model to be promted to give a question with 4 answer alternativs that are then transferd to the main.js file where the question and answers are used. 


