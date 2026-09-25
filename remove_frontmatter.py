import os
import re

def remove_frontmatter(directory):
    # Regex to match YAML frontmatter at the very beginning of the file
    # Matches ---\n ... \n---\n
    frontmatter_pattern = re.compile(r'^---\s*\n.*?\n---\s*\n?', re.DOTALL)
    
    count = 0
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(('.md', '.markdown')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    if content.startswith('---'):
                        new_content = frontmatter_pattern.sub('', content, count=1)
                        if new_content != content:
                            with open(file_path, 'w', encoding='utf-8') as f:
                                f.write(new_content)
                            print(f"✅ Removed: {os.path.relpath(file_path, directory)}")
                            count += 1
                        else:
                            print(f"⚠️ No valid closing --- found: {os.path.relpath(file_path, directory)}")
                except Exception as e:
                    print(f"❌ Error processing {file_path}: {e}")
                    
    print(f"\n🎉 Done! Removed frontmatter from {count} files.")

if __name__ == "__main__":
    notes_dir = "./notes"
    if os.path.exists(notes_dir):
        remove_frontmatter(notes_dir)
    else:
        print(f"❌ Directory '{notes_dir}' not found. Please run this script from the project root.")