export type EventItem = {
  image: string;
  title: string;
  slug: string;
  date: string;
  location: string;
  time: string;
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "React Summit 2025",
    slug: "react-summit-2025",
    date: "2025-01-01",
    location: "Location 1",
    time: "10:00 AM - 12:00 PM",
  },
  {
    image: "/images/event2.png",
    title: "KubeCon + CloudNativeCon Europe 2025",
    slug: "kubecon-cloudnativecon-europe-2025",
    date: "2025-01-01",
    location: "Location 2",   
    time: "10:00 AM - 12:00 PM",
  },
  {
    image: "/images/event3.png",
    title: "JSConf Budapest 2025",
    slug: "jsconf-budapest-2025",
    date: "2025-01-01", 
    location: "Location 3",   
    time: "10:00 AM - 12:00 PM",
  },
  {
    image: "/images/event4.png",
    title: "HackZurich 2025",
    slug: "hackzurich-2025",
    date: "2025-01-01",
    location: "Location 4",   
    time: "10:00 AM - 12:00 PM",      
  },
  {
    image: "/images/event5.png",
    title: "AWS re:Invent 2025",
    slug: "aws-reinvent-2025",
    date: "2025-01-01",
    location: "Location 5",   
    time: "10:00 AM - 12:00 PM",      
  },
  {
    image: "/images/event6.png",
    title: "Google I/O Extended Baku 2025",
    slug: "google-io-extended-baku-2025",
    date: "2025-01-01",
    location: "Location 6",   
    time: "10:00 AM - 12:00 PM",      
  },
];