"""Simple LangChain/OpenAI based agent wrapper.
This is a minimal starting point. Update model parameters or chain to fit production needs.
"""
import os
from typing import Optional

from langchain.llms import OpenAI
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains import RetrievalQA


class ChatAgent:
    def __init__(self, faiss_path: str = "./store/faiss_index"):
        self.openai_api_key = os.getenv("OPENAI_API_KEY")
        if not self.openai_api_key:
            print("OPENAI_API_KEY not set — agent will not be able to call OpenAI.")
        # LLM wrapper
        self.llm = OpenAI(temperature=0)
        # embeddings and vectorstore
        try:
            self.embeddings = OpenAIEmbeddings()
            if os.path.exists(faiss_path):
                self.vectorstore = FAISS.load_local(faiss_path, self.embeddings)
            else:
                self.vectorstore = None
        except Exception as e:
            print(f"Warning: could not initialize embeddings/vectorstore: {e}")
            self.vectorstore = None

        if self.vectorstore:
            self.chain = RetrievalQA.from_chain_type(llm=self.llm, chain_type="stuff", retriever=self.vectorstore.as_retriever())
        else:
            self.chain = None

    def answer(self, query: str, session_id: Optional[str] = None) -> str:
        if self.chain:
            result = self.chain.run(query)
            return result
        # Fallback: ask LLM directly (not recommended for retrieval-heavy QA)
        return self.llm(query)
