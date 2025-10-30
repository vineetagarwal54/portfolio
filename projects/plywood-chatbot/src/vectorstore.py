"""FAISS vectorstore wrapper using sentence-transformers for embeddings.
This file provides simple persist/load helpers and a small API for adding documents.
"""
from pathlib import Path
from typing import List, Iterable
import os
import numpy as np

from sentence_transformers import SentenceTransformer
import faiss


class FaissStore:
    def __init__(self, model_name: str = "all-MiniLM-L6-v2", index_path: str = "./store/faiss_index"):
        self.model = SentenceTransformer(model_name)
        self.index_path = Path(index_path)
        self.index = None

    def embed_texts(self, texts: Iterable[str]) -> np.ndarray:
        return self.model.encode(list(texts), show_progress_bar=False, convert_to_numpy=True)

    def create_index(self, texts: List[str]):
        embs = self.embed_texts(texts)
        dim = embs.shape[1]
        self.index = faiss.IndexFlatL2(dim)
        self.index.add(embs)
        self.index_path.parent.mkdir(parents=True, exist_ok=True)
        faiss.write_index(self.index, str(self.index_path))

    def load_index(self):
        if not self.index_path.exists():
            raise FileNotFoundError("Index file not found. Run ingestion to create it.")
        self.index = faiss.read_index(str(self.index_path))

    def search(self, query: str, k: int = 5):
        q_emb = self.embed_texts([query])
        D, I = self.index.search(q_emb, k)
        return D, I
