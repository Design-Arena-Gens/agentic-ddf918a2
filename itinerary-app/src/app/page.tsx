import styles from "./page.module.css";

type Segment = {
  time: string;
  title: string;
  details: string;
};

type DayPlan = {
  date: string;
  label: string;
  summary: string;
  segments: Segment[];
};

const itinerary: DayPlan[] = [
  {
    date: "Friday, 6 December 2024",
    label: "Departure – Kolkata to Varanasi (Banaras)",
    summary:
      "Board the overnight train from Kolkata to reach Varanasi refreshed for sunrise on the ghats.",
    segments: [
      {
        time: "20:00",
        title: "Arrive at Howrah Junction",
        details:
          "Reach Howrah by 8 PM, pick up snacks, fill water, and locate Platform 9 for the 12317 Akal Takht Express.",
      },
      {
        time: "20:40",
        title: "Board 12317 Akal Takht Express",
        details:
          "Settle into 2A/3A coach; keep tickets and ID ready. Lights-out by 22:00 to rest for the early arrival.",
      },
      {
        time: "Overnight",
        title: "In-Train Comfort",
        details:
          "Carry a light shawl, earplugs, and download offline maps of Varanasi. Keep luggage locked with a chain.",
      },
    ],
  },
  {
    date: "Saturday, 7 December 2024",
    label: "Sunrise Ghats and Old City",
    summary:
      "Immerse yourself in the spiritual heart of Banaras with morning aarti, street food, and silk shopping.",
    segments: [
      {
        time: "05:30",
        title: "Arrival at Varanasi Junction",
        details:
          "Train reaches platform by 5:30 AM. Take a prepaid cab or auto to the Dashashwamedh Ghat stay (~₹180).",
      },
      {
        time: "06:00",
        title: "Sunrise Boat Ride",
        details:
          "Freshen up and hire a shared boat (₹150-200) to witness the colors of dawn across Assi to Manikarnika Ghats.",
      },
      {
        time: "08:00",
        title: "Kachori-Sabzi Breakfast",
        details:
          "Walk to Kachori Gali for crispy kachori, jalebi, and kulhad chai at the iconic Kashi Chaat Bhandar by 8:30 AM.",
      },
      {
        time: "10:30",
        title: "Kashi Vishwanath Temple Darshan",
        details:
          "Join the queue via Gate 4; deposit bags and phones at the cloakroom. Explore the corridor and attend noon aarti.",
      },
      {
        time: "13:30",
        title: "Lunch + Silk Shopping",
        details:
          "Try thali at Kaashi Chat Bhandar, then browse Banarasi silk at Thateribazar. Ship purchases via courier if needed.",
      },
      {
        time: "17:30",
        title: "Ganga Aarti at Dashashwamedh",
        details:
          "Reach by 5:30 PM for front-row mats (₹100). Capture the synchronized rituals; keep footwear in bag.",
      },
      {
        time: "20:00",
        title: "Evening Food Walk",
        details:
          "Sample tamatar chaat, malaiyyo, and rabdi at Godowlia. Early lights-out to recover from the overnight journey.",
      },
    ],
  },
  {
    date: "Sunday, 8 December 2024",
    label: "Sarnath Excursion & Cultural Evening",
    summary:
      "Discover Buddhist heritage in Sarnath, then unwind to classical music by the ghats.",
    segments: [
      {
        time: "07:00",
        title: "Breakfast at Assi Ghat",
        details:
          "Start with lemon tea and poha at Pappu Chaiwala; watch the Ganga Se Aarti yoga session.",
      },
      {
        time: "09:00",
        title: "Travel to Sarnath",
        details:
          "Book an Ola/auto (₹400 one-way, ~35 mins). Carry sun protection and cash for entry tickets.",
      },
      {
        time: "10:00",
        title: "Sarnath Circuit",
        details:
          "Visit Dhamek Stupa, the Archaeological Museum (closed on Fridays), and Mulagandha Kuti Vihara. Hire a guide at the gate (₹300).",
      },
      {
        time: "13:30",
        title: "Lunch Back in Varanasi",
        details:
          "Return to the city and enjoy lunch at Baati Chokha (Lanka) for authentic UP cuisine and lassi.",
      },
      {
        time: "16:00",
        title: "Weaving Workshop",
        details:
          "Pre-book a Banarasi weaving demo at a local loom in Madanpura to understand zari craftsmanship.",
      },
      {
        time: "19:00",
        title: "Subah-e-Banaras Recital",
        details:
          "Attend evening classical music at Assi Ghat amphitheater; carry a light shawl for the riverside breeze.",
      },
      {
        time: "21:00",
        title: "Dinner Cruise",
        details:
          "Opt for a pre-booked rooftop dinner boat or dine at Open Hand Café for continental comfort food.",
      },
    ],
  },
  {
    date: "Monday, 9 December 2024",
    label: "Spiritual Farewell and Return Journey",
    summary:
      "Savor the last moments on the ghats before the night train back to Kolkata.",
    segments: [
      {
        time: "06:00",
        title: "Ritual Bath & Morning Stroll",
        details:
          "Take a dip at Assi Ghat (if comfortable) and photograph the morning arti; visit the nearby Tulsi Ghat akhada.",
      },
      {
        time: "09:00",
        title: "Cafe Brunch",
        details:
          "Check out Aum Café for ragi pancakes and banana lassi; settle bills and pack souvenirs carefully.",
      },
      {
        time: "12:00",
        title: "Check-out & Luggage Drop",
        details:
          "Leave bags at hotel reception or Cloak Room at Varanasi Junction (₹25 per bag) for the day.",
      },
      {
        time: "13:00",
        title: "Banaras Hindu University Stroll",
        details:
          "Visit Bharat Kala Bhavan museum and the New Vishwanath Temple; hire an e-rickshaw for quick campus loops.",
      },
      {
        time: "16:30",
        title: "Sunset at Man Singh Observatory",
        details:
          "Enjoy panoramic views from the rooftop café overlooking the Ganga as the sky changes hues.",
      },
      {
        time: "18:45",
        title: "Return to Station",
        details:
          "Collect luggage, grab packed dinner (khichdi/rolls) from Kashi Chat Corner, and reach Varanasi Junction by 7:15 PM.",
      },
      {
        time: "20:05",
        title: "Board 12318 Akal Takht Express",
        details:
          "Depart from Platform 8. Confirm coach position via NTES app. Set alarms for early morning tea service.",
      },
      {
        time: "Overnight",
        title: "Night Return Journey",
        details:
          "Keep power bank handy, update family on ETA (~8:20 AM on 10 Dec), and rest for the workday ahead.",
      },
    ],
  },
];

const essentials = [
  "Carry valid photo ID, photocopies, and digital tickets for both legs.",
  "Download UTS and IRCTC Rail Connect apps for real-time platform and coach updates.",
  "Pack layers – mornings by the Ganga get chilly in December nights.",
  "Keep cash in smaller denominations for autos, temples, and street food.",
  "Respect local customs: footwear off near ghats/temples, photography restrictions at Vishwanath and Sarnath museum.",
];

const contacts = [
  {
    label: "Howrah Junction Enquiry",
    value: "139 (IVRS)",
  },
  {
    label: "Varanasi Junction Helpdesk",
    value: "+91-542-239-0108",
  },
  {
    label: "Kashi Vishwanath Temple Assistance",
    value: "+91-542-239-2629",
  },
  {
    label: "Varanasi Tourist Helpline",
    value: "1800-180-0185",
  },
];

export const metadata = {
  title: "Kolkata to Banaras Train Itinerary | 6-9 Dec",
  description:
    "Detailed 6th-9th December overnight train itinerary from Kolkata to Varanasi (Banaras) covering ghats, food, and return journey.",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero}>
          <p className={styles.badge}>6 – 9 December 2024 · Overnight Train Plan</p>
          <h1>Banaras by Rail: 3 Nights of Sunrise Rituals & Street Flavors</h1>
          <p className={styles.subtitle}>
            Leave Kolkata on the 6th night, soak in Varanasi&apos;s ghats and heritage all weekend, and head back on the
            9th-night Akal Takht Express.
          </p>
        </header>

        <section className={styles.timeline}>
          {itinerary.map((day) => (
            <article key={day.date} className={styles.dayCard}>
              <div className={styles.dayHeader}>
                <span className={styles.dayDate}>{day.date}</span>
                <h2>{day.label}</h2>
                <p>{day.summary}</p>
              </div>
              <ul className={styles.segmentList}>
                {day.segments.map((segment) => (
                  <li key={`${day.date}-${segment.time}`} className={styles.segment}>
                    <div className={styles.segmentTime}>{segment.time}</div>
                    <div className={styles.segmentBody}>
                      <h3>{segment.title}</h3>
                      <p>{segment.details}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className={styles.infoGrid}>
          <div className={styles.card}>
            <h2>Travel Essentials</h2>
            <ul>
              {essentials.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
          <div className={styles.card}>
            <h2>Key Contacts</h2>
            <ul>
              {contacts.map((contact) => (
                <li key={contact.label}>
                  <span className={styles.contactLabel}>{contact.label}</span>
                  <span>{contact.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>
            Tip: Reserve ghats-side stays early for the December rush and keep extra time buffer for festival traffic near
            Godowlia.
          </p>
        </footer>
      </main>
    </div>
  );
}
