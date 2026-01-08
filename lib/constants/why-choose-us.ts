import { Check, X } from "lucide-react";

export const whyChooseUs = [
    {
        id: "innenta",
        title: "Innenta",
        highlight: true,
        items: [
            { icon: Check, text: "Start immediately" },
            { icon: Check, text: "Flat, predictable pricing" },
            { icon: Check, text: "One synchronized expert team" },
            { icon: Check, text: "Founder-led, clear communication" },
            { icon: Check, text: "Scalable, long-term partnership" },
        ],
    },
    {
        id: "freelancers",
        title: "Freelancers",
        items: [
            { icon: X, text: "Uncertain start times" },
            { icon: X, text: "Hourly billing & scope creep" },
            { icon: X, text: "Inconsistent quality" },
            { icon: X, text: "Requires constant follow-ups" },
            { icon: X, text: "No long-term reliability" },
        ],
    },
    {
        id: "agencies",
        title: "Agencies",
        items: [
            { icon: X, text: "High costs & complex pricing" },
            { icon: X, text: "Slower delivery timelines" },
            { icon: X, text: "Multiple layers of communication" },
            { icon: X, text: "Limited flexibility" },
            { icon: X, text: "Rigid contracts & processes" },
        ],
    },
];
