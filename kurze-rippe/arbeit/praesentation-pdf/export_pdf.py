"""Erstellt eine transportable PDF aus den geprüften Folienansichten."""
from io import BytesIO
from pathlib import Path
import argparse
from PIL import Image
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from reportlab import rl_config
from pypdf import PdfReader


def export_pdf(render_dir: Path, output: Path, count: int = 15):
    output.parent.mkdir(parents=True, exist_ok=True)
    rl_config.useA85 = False
    pdf = canvas.Canvas(str(output), pagesize=(960, 540), pageCompression=1)
    pdf.setTitle("Kurze Rippe - Website und Social Media")
    pdf.setAuthor("MINTRO")
    pdf.setCreator("MINTRO")
    pdf.setSubject("Präsentation, aktueller Stand vom 23.11.2026")
    for number in range(1, count + 1):
        source = render_dir / f"slide-{number}.png"
        with Image.open(source) as image:
            if image.size != (3840, 2160):
                raise ValueError(f"Unerwartete Foliengröße: {source.name}: {image.size}")
            if number in (1, 2, 3, 6, 15):
                pixels = BytesIO()
                image.convert("RGB").save(pixels, format="JPEG", quality=95, subsampling=0, optimize=True)
                pixels.seek(0)
                embedded = ImageReader(pixels)
            else:
                embedded = ImageReader(image.convert("RGB"))
            pdf.drawImage(embedded, 0, 0, width=960, height=540)
        pdf.showPage()
    pdf.save()

    # Erneut öffnen und echte eingebettete Bildobjekte auf jeder Seite prüfen.
    reader = PdfReader(output)
    if len(reader.pages) != count:
        raise ValueError("Die Seitenzahl stimmt nicht.")
    for number, page in enumerate(reader.pages, 1):
        images = [value.get_object() for value in page["/Resources"]["/XObject"].get_object().values()
                  if value.get_object().get("/Subtype") == "/Image"]
        if len(images) != 1 or images[0].get("/F") is not None:
            raise ValueError(f"Bild nicht vollständig eingebettet: Seite {number}")
        if (images[0]["/Width"], images[0]["/Height"]) != (3840, 2160):
            raise ValueError(f"Bildauflösung stimmt nicht: Seite {number}")
    print(f"{count} Seiten mit jeweils einem vollständig eingebetteten Folienbild: {output}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("render_dir", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--slides", type=int, default=15)
    args = parser.parse_args()
    export_pdf(args.render_dir, args.output, args.slides)
