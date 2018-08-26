
def create_import_js(write_file, read_file_path):
    with open(read_file, mode='r') as rfile:
        wfile.write('function ' + read_file.split('.')[0] + '() {\n')
        wfile.write("let html = '';")
        pre_flag = False
        while True:
            line = rfile.readline()
            if not line:
                break

            if '<pre>' in line:
                pre_flag = True
                print(line)
            if '</pre>' in line:
                pre_flag = False
                print(line)

            if pre_flag:
                wfile.write("html += '" + line.strip() + "\\n';")
            else:
                wfile.write("html += '" + line.strip() + "';")
        wfile.write("document.write(html);\n")
        wfile.write('}\n\n')


if __name__ == '__main__':
    write_file = 'import.js'
    read_file = 'body_rettiwt.html'

    with open(write_file, mode='w') as wfile:
        create_import_js(wfile, read_file)
