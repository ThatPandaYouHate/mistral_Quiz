from http.server import HTTPServer, SimpleHTTPRequestHandler
import subprocess
import os

class CustomHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Serve files as normal
        return SimpleHTTPRequestHandler.do_GET(self)

    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        SimpleHTTPRequestHandler.end_headers(self)

def run_server(port=8000):
    server_address = ('', port)
    httpd = HTTPServer(server_address, CustomHandler)
    print(f"Server running on port {port}")
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()
