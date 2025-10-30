"""Script: ingest data/ into FAISS index using local sentence-transformers embeddings.

Run this after installing requirements and creating a venv. It will:
 - read files from data/
 - chunk text
 - generate embeddings with sentence-transformers
 - create and persist a FAISS index under projects/plywood-chatbot/store/

This uses the existing `src.ingest` and `src.vectorstore` helpers.
"""
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from src.ingest import ingest_folder
from src.vectorstore import FaissStore


def main():
    project_root = Path(__file__).resolve().parents[1]
    data_dir = project_root / "data"
    if not data_dir.exists():
        print("No data directory found at", data_dir)
        return

    print("Ingesting files from:", data_dir)
    chunks = ingest_folder(data_dir)
    print(f"Total chunks produced: {len(chunks)}")

    index_path = project_root / "store" / "faiss_index"
    store = FaissStore(model_name="all-MiniLM-L6-v2", index_path=str(index_path))
    # limit number for quick test if dataset huge
    to_index = chunks[:200]
    if not to_index:
        print("No chunks to index. Add files to data/ and try again.")
        return

    print(f"Indexing {len(to_index)} chunks with {store.model.__class__.__name__}")
    store.create_index(to_index)
    print("Index created at:", index_path)


if __name__ == '__main__':
    main()
