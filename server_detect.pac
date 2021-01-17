var proxy = "PROXY 192.168.1.7:1801";
var direct = "DIRECT";
var serverDomainName = "server";

function FindProxyForURL(url, host) {
	if ( isResolvable(serverDomainName)
		&& ! isInNet(host, "192.168.0.0", "255.255.0.0") ) {
		return proxy;
	}
	return direct;
}
