// ================= EVENTS =================

// Get all events
export const getEvents = () => {
  return JSON.parse(localStorage.getItem("events")) || [];
};

// Save new event
export const saveEvent = (event) => {
  const events = getEvents();
  events.push(event);
  localStorage.setItem("events", JSON.stringify(events));
};

// ================= REGISTRATIONS =================

// Get registrations
export const getRegistrations = () => {
  return JSON.parse(localStorage.getItem("registrations")) || {};
};

// Register for event
export const registerEvent = (eventId) => {
  const registrations = getRegistrations();

  if (!registrations[eventId]) {
    registrations[eventId] = true;
  }

  localStorage.setItem("registrations", JSON.stringify(registrations));
};

// Check if registered
export const isRegistered = (eventId) => {
  const registrations = getRegistrations();
  return registrations[eventId] || false;
};