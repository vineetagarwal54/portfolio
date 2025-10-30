@echo off
REM Activate venv then run uvicorn
if exist .venv\Scripts\activate (
    call .venv\Scripts\activate
) else (
    echo Please create a virtual environment first: python -m venv .venv
    goto :eof
)

set OPENAI_API_KEY=%OPENAI_API_KEY%
echo Starting dev server on http://127.0.0.1:8000
uvicorn src.main:app --reload --host 127.0.0.1 --port 8000
