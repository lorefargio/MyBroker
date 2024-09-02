self.addEventListener('push', function(event) {

	// get payload data
	const data = event.data ? event.data.json() : {};
  
	const options = {
	  body: data.body ,
	};
	
	//show notification
	event.waitUntil(
	  self.registration.showNotification(data.title || 'Titolo di Test', options)
	);
});

self.addEventListener("notificationclick", (event) => {
	event.notification.close();

	// This looks to see if the current window is already open and
	// focuses if it is
	event.waitUntil(
		clients
			.matchAll({
				type: "window",
			})
			.then((clientList) => {
				for (const client of clientList) {
					if (client.url === "/" && "focus" in client)
						return client.focus();
				}
				if (clients.openWindow) return clients.openWindow("/");
			})
	);
});