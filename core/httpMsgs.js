exports.show500 = function (req, resp, err) {
        resp.writeHead(500, { "Content-Type": "application/JSON" });
        resp.write(JSON.stringify("{'Status':'Internal Error Accurred'}"));
    resp.end();
};

exports.sendJson = function (req, resp, data) {
    if (data) {
        resp.writeHead(200, { "Content-Type": "application/JSON" });
        resp.write(JSON.stringify(data));
    }
    resp.end();
};

exports.show405 = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(405, "Method not Supported", { "Content-Type": "text/html" });
        resp.write("<html><head><title>405</title></head><body>405: Method not Supported</body></html>");
    }else {
        resp.writeHead(405, "Method not Supported", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "Method not Supported:" }));
    }
    resp.end();
};

exports.show404 = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(404, "Resource Not Found", { "Content-Type": "text/html" });
        resp.write("<html><head><title>404</title></head><body>404: Resource Not Found</body></html>");
    }else {
        resp.writeHead(404, "Resource Not Found", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "Resource Not Found:" }));
    }
    resp.end();
};

exports.show401 = function (req, resp,err) {
    resp.writeHead(401, "Invalid Input", { "Content-Type": "application/json"});
    resp.write(JSON.stringify(err));
    resp.end();
};

exports.send200 = function (req, resp) {
    resp.writeHead(200, { "Content-Type": "application/json" });
};

exports.showHome = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(200,{ "Content-Type": "text/html" });
        resp.write("<html><head><title>Home</title></head><body>Valid endpoint: <br> /products/ - GET -TO Get all Products</br>/products/<productno> - GET -TO Get a specific producct</body></html>"); 
    }else {
        resp.writeHead(200, { "Content-Type": "application/json" });
        resp.write(JSON.stringify([
            { url: "/products", operation: "GET", description: "To List All Products" },
            { url: "/products/<prodno>", operation: "GET", description: "Search for Product" }
        ]));
    }
    resp.end();
};