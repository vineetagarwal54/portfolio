# Plywood Chatbot

This project is a starter AI chatbot for your plywood business using LangChain, OpenAI, and FAISS.

Quick start (Windows):

1. Create a Python 3.11+ virtual environment and activate it:

```powershell
python -m venv .venv
.\.venv\Scripts\activate
```

2. Install dependencies:

```powershell
pip install -r requirements.txt
```

3. Create a `.env` file (see `.env.example`) and set your OpenAI API key:

```ini
OPENAI_API_KEY=sk-...
```

4. Run the dev server:

```powershell
cd projects\plywood-chatbot
scripts\run_local.bat
```

What's included:
- `src/main.py` — FastAPI app with chat endpoint.
- `src/ingest.py` — simple ingestion utilities for text/PDF files.
- `src/vectorstore.py` — FAISS wrapper using sentence-transformers.
- `src/agent.py` — LangChain-based chat agent (stubbed; requires embeddings/keys).
- `data/sample.txt` — sample product data to try ingestion.

Next steps:
- Populate `data/` with product catalogs, spec sheets, and FAQ PDFs.
- Run `python -m src.ingest` to create a vector index (see `ingest.py`).
- Configure meeting scheduling (Calendly) separately for customer interactions.

Notes:
- This is a scaffold and uses placeholders; update `src/agent.py` to match the model/embeddings you prefer.
