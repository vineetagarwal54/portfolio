from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import os

from src.agent import ChatAgent

app = FastAPI(title="Plywood Chatbot API")


class ChatRequest(BaseModel):
    query: str
    session_id: Optional[str] = None


@app.on_event("startup")
def startup_event():
    # Initialize the agent (loads vectorstore if present)
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        print("Warning: OPENAI_API_KEY not set. Chat will fail without it.")
    app.state.agent = ChatAgent()


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/chat")
def chat(req: ChatRequest):
    agent: ChatAgent = app.state.agent
    if not req.query:
        raise HTTPException(status_code=400, detail="query is required")
    resp = agent.answer(req.query, session_id=req.session_id)
    return {"answer": resp}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("src.main:app", host="127.0.0.1", port=8000, reload=True)
