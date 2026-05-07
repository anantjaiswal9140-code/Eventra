const EVENT_KEY = "events";
const REG_KEY = "registrations";

/* ================= EVENTS ================= */

export const getEvents = () => {
  const data = JSON.parse(localStorage.getItem(EVENT_KEY));
  return Array.isArray(data) ? data : [];
};

export const saveEvent = (event) => {
  const events = getEvents();

  events.push(event);

  localStorage.setItem(EVENT_KEY, JSON.stringify(events));
};

export const deleteEvent = (eventId) => {
  const events = getEvents().filter(
    (e) => String(e.id) !== String(eventId)
  );

  localStorage.setItem(EVENT_KEY, JSON.stringify(events));

  /* ALSO DELETE REGISTRATIONS */
  const regs = getRegistrations().filter(
    (r) => String(r.eventId) !== String(eventId)
  );

  localStorage.setItem(REG_KEY, JSON.stringify(regs));
};

/* ================= REGISTRATIONS ================= */

export const getRegistrations = () => {
  const data = JSON.parse(localStorage.getItem(REG_KEY));
  return Array.isArray(data) ? data : [];
};

export const saveRegistration = (registration) => {
  const regs = getRegistrations();

  regs.push(registration);

  localStorage.setItem(REG_KEY, JSON.stringify(regs));
};

/* ================= DASHBOARD HELPERS ================= */

export const getTotalRegistrations = () => {
  return getRegistrations().length;
};

export const getRegistrationsByEvent = (eventId) => {
  return getRegistrations().filter(
    (r) => String(r.eventId) === String(eventId)
  );
};