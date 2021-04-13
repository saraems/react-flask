FROM python
ARG PORT=5000
WORKDIR /react-flask
COPY requirements.txt . 
RUN pip3 install -r requirements.txt
COPY api-rest api-rest 
COPY build build
ENV FLASK_APP="api-rest/api.py"
ENV FLASK_ENV="production"
CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0", "--port=${PORT}"]
