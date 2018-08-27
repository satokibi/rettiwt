def create_from_html(write_file, read_file_path):
    with open(read_file_path, mode='r') as rfile:
        wfile.write('function ' + read_file_path.split('/')[-1].split('.')[0] + '() {\n')
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


def create_from_js(write_file, read_file_path):
    with open(read_file_path, mode='r') as rfile:
        while True:
            line = rfile.readline()
            if not line:
                break
            wfile.write(line.strip())


if __name__ == '__main__':
    write_file = 'import.js'

    header_file = './files/header'
    footer_file = './files/footer'
    lib_js = './files/lib_js'

    with open(write_file, mode='w') as wfile:
        create_from_html(wfile, header_file)
        create_from_html(wfile, footer_file)
        create_from_js(wfile, lib_js)
