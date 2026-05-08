const EVENT_KEY = "events";
const REG_KEY = "registrations";

/* ================= EVENTS ================= */

// Get all events
export const getEvents = () => {
  return JSON.parse(
    localStorage.getItem(EVENT_KEY)
  ) || [];
};

// Save event
export const saveEvent = (event) => {

  const events = getEvents();

  events.push(event);

  localStorage.setItem(
    EVENT_KEY,
    JSON.stringify(events)
  );
};

// Delete event + related registrations
export const deleteEvent = (id) => {

  // Remove event
  const updatedEvents = getEvents().filter(
    (event) => event.id != id
  );

  localStorage.setItem(
    EVENT_KEY,
    JSON.stringify(updatedEvents)
  );

  // Remove registrations of deleted event
  const updatedRegs = getRegistrations().filter(
    (reg) => reg.eventId != id
  );

  localStorage.setItem(
    REG_KEY,
    JSON.stringify(updatedRegs)
  );
};

/* ================= REGISTRATIONS ================= */

// Get registrations
export const getRegistrations = () => {

  return JSON.parse(
    localStorage.getItem(REG_KEY)
  ) || [];
};

// Save registration
export const saveRegistration = (registration) => {

  const regs = getRegistrations();

  regs.push(registration);

  localStorage.setItem(
    REG_KEY,
    JSON.stringify(regs)
  );
};

// Total registrations
export const getTotalRegistrations = () => {

  return getRegistrations().length;
};

// Registrations by event
export const getRegistrationsByEvent = (
  eventId
) => {

  return getRegistrations().filter(
    (reg) => reg.eventId == eventId
  );
};