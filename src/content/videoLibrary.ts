import { CuratedVideo } from "../lib/types";

// ============================================================================
// ZONE A: YOUR CONTENT (Spotlight)
// ============================================================================
export const MY_LATEST_VIDEO: CuratedVideo = {
  id: "jfKfPfyJRdk",
  title: "Lab Ambience Audio Stream: 24/7 Focus",
  channelName: "RK Patel Lab",
  tags: ["Ambience", "Focus", "MyWork"],
  commentary: "My latest stream designed for deep work sessions.",
  dateAdded: "2025-11-20"
};

// ============================================================================
// ZONE B: CURATED VAULT (Recommendations)
// ============================================================================
export const CURATED_LIBRARY: CuratedVideo[] = [
  {
    id: "HBluLfX2F_k",
    title: "You've (Likely) Been Playing The Game of Life Wrong",
    channelName: "Veritasium",
    tags: ["Science", "Simulation", "Math", "Must-Watch"],
    commentary: "A fascinating dive into cellular automata. Derek explains how simple rules create complex behaviors, which parallels how biological complexity arises from simple chemical rules. The visualization of the 'gliders' is particularly relevant to our recent study on emergent systems.",
    dateAdded: "2025-12-01"
  },
  {
    id: "aircAruvnKk",
    title: "But what is a neural network? | Deep learning chapter 1",
    channelName: "3Blue1Brown",
    tags: ["AI", "Math", "Deep Learning", "Tutorial"],
    commentary: "The definitive visual guide to neural networks. Grant's animations make the complex math intuitive. Essential viewing for any biologist trying to understand the 'black box' of modern bioinformatics tools.",
    dateAdded: "2025-12-02"
  }
];