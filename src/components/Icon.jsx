import { Calendar, CalendarCheck, Check, ChevronDown, Menu, X, Send, Quote, Star, ArrowRight, ArrowUpRight, GraduationCap, Users, Video, Award, Calculator, Atom, FlaskConical, Languages, Pencil, BookOpen, Lightbulb, Facebook, Youtube, Instagram, MessageCircle, Sparkles, Phone, Mail, MapPin, Clock, Circle } from "lucide-react";

// data te icon: "calendar-check" likhle ekhane thake khuje ney. Notun icon lagle import + MAP e ekta line add korun.
// Full list: https://lucide.dev/icons
const MAP = { calendar: Calendar, "calendar-check": CalendarCheck, check: Check, "chevron-down": ChevronDown, menu: Menu, x: X, send: Send, quote: Quote, star: Star, "arrow-right": ArrowRight, "arrow-up-right": ArrowUpRight, "graduation-cap": GraduationCap, users: Users, video: Video, award: Award, calculator: Calculator, atom: Atom, "flask-conical": FlaskConical, languages: Languages, pencil: Pencil, "book-open": BookOpen, lightbulb: Lightbulb, facebook: Facebook, youtube: Youtube, instagram: Instagram, "message-circle": MessageCircle, sparkles: Sparkles, phone: Phone, mail: Mail, "map-pin": MapPin, clock: Clock };

export default function Icon({ name, className = "h-5 w-5", ...rest }) {
  const C = MAP[name] || Circle;
  return <C className={className} strokeWidth={1.8} aria-hidden="true" {...rest} />;
}
