var proxy = "PROXY 192.168.1.7:1801";
var direct = "DIRECT";
var serverDomainName = "server";

function FindProxyForURL(url, host) {
	if ( isResolvable(serverDomainName) ) {
		return proxy;
	}
	return direct;
}
