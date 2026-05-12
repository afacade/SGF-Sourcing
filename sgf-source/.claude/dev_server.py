"""Tiny dev HTTP server for SGF Sourcing.

Same behaviour as `python -m http.server`, but disables browser caching so
edits to CSS/JS/HTML show up on every reload without a hard refresh.
"""

from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5173
    HTTPServer(("", port), NoCacheHandler).serve_forever()
