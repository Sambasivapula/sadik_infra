import PyPDF2
import sys

def extract_text(pdf_path):
    try:
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ""
            for page in reader.pages:
                text += page.extract_text() + "\n"
            return text
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    text = extract_text("Portfolio/SADIK INFRA Portfolio.pdf")
    with open("parsed_pdf.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("SUCCESS")
