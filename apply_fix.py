import re, sys

def replace_line(file_path, pattern, replacement):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    new_lines = []
    for line in lines:
        if re.search(pattern, line):
            new_lines.append(replacement + "\n")
        else:
            new_lines.append(line)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

if __name__ == "__main__":
    layout_path = "src/app/layout.tsx"
    # Replace title
    replace_line(layout_path, r"<title>.*</title>", "    <title>The Special Character – Digital Product Engineering & Enterprise Software Partner</title>")
    # Replace meta description
    replace_line(layout_path, r"<meta name=\"description\" content=\".*\"/>", "    <meta name=\"description\" content=\"We help technology, e‑commerce, SaaS, and professional services companies streamline processes and accelerate growth with expert digital product engineering and enterprise software solutions.\"/>")
    # Replace H1
    replace_line(layout_path, r"<h1>.*</h1>", "        <h1>The Special Character – Digital Product Engineering & Enterprise Software Partner</h1>")
    # Replace og:title
    replace_line(layout_path, r"<meta property=\"og:title\" content=\".*\" />", "    <meta property=\"og:title\" content=\"The Special Character – Digital Product Engineering & Enterprise Software Partner\" />")
    # Replace twitter:title
    replace_line(layout_path, r"<meta name=\"twitter:title\" content=\".*\" />", "    <meta name=\"twitter:title\" content=\"The Special Character – Digital Product Engineering & Enterprise Software Partner\" />")
    print('SEO fixes applied')
