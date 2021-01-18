var global = "PROXY 192.168.1.7:1801";
var auto = "PROXY 192.168.1.7:1809";
var direct = "DIRECT";
var serverDomainName = "server";

function FindProxyForURL(url, host) {
	if ( !isInNet(host, "192.168.0.0", "255.255.0.0")
	&& !isInNet(host, "127.0.0.1", "255.255.255.255")
	&& isResolvable(serverDomainName) ) {
		return auto;
	}
	return direct;
}
