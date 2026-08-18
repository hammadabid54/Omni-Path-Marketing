#!/usr/bin/env python3
"""Fix double brackets [[..]] -> [{..}] from the previous fix."""
import re
from pathlib import Path

P = Path(r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\content\case-studies.ts")
text = P.read_text(encoding="utf-8")

# Replace the doubled [[ and ]] for topStats and trajectory in the 3 enriched cases
# (only the cases we explicitly modified; replace the brackets we added)
text = text.replace('"topStats": [[\n', '"topStats": [\n')
text = text.replace(']],', '],')
# Only fix trajectory if it has [[ pattern
text = re.sub(r'"trajectory": \[\[\n', '"trajectory": [\n', text)
text = re.sub(r'\]\](\s*,?\s*"keywords")', ']\1', text)

P.write_text(text, encoding="utf-8")
print("Fixed double brackets.")
