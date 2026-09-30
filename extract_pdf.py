import zlib
import re

with open('public/Shubhangi_Thakur_Resume.pdf', 'rb') as f:
    data = f.read()

# Find all streams
stream_pattern = re.compile(rb'stream\r?\n(.*?)\r?\nendstream', re.DOTALL)
all_text = []

for match in stream_pattern.finditer(data):
    raw_stream = match.group(1)
    decompressed = None
    try:
        decompressed = zlib.decompress(raw_stream)
    except Exception:
        decompressed = raw_stream
    

    tj_matches = re.findall(rb'\(((?:[^()\\]|\\.)*)\)\s*(?:Tj|\'|")', decompressed)
    for m in tj_matches:
        txt = m.decode('latin1', errors='ignore')
        if txt.strip():
            all_text.append(txt)
    
    array_matches = re.findall(rb'\[(.*?)\]\s*TJ', decompressed, re.DOTALL)
    for arr in array_matches:
        arr_strings = re.findall(rb'\(((?:[^()\\]|\\.)*)\)', arr)
        line = ''.join([s.decode('latin1', errors='ignore') for s in arr_strings if s.strip()])
        if line.strip():
            all_text.append(line)

with open('resume_text.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(all_text))
print(f'Done: wrote {len(all_text)} lines to resume_text.txt')

