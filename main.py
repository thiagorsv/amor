from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")


#uvicorn main:app --host 0.0.0.0 --port 8000 --reload
#paracambio


@app.get("/")
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})