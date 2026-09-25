"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import toast, { Toaster } from "react-hot-toast";
import { ILibrary } from "@/Types/library.type";

const MAX_PLAN = 5;

interface IPlanContext {
  plan: ILibrary[];
  saved: ILibrary[];
  addToPlan: (workout: ILibrary) => void;
  saveForLater: (workout: ILibrary) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
}

const PlanContext = createContext<IPlanContext | null>(null);

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<ILibrary[]>([]);
  const [saved, setSaved] = useState<ILibrary[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const p = localStorage.getItem("fitlog-plan");
      const s = localStorage.getItem("fitlog-saved");
      if (p) setPlan(JSON.parse(p));
      if (s) setSaved(JSON.parse(s));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [plan, saved, loaded]);

  const addToPlan = (workout: ILibrary) => {
    if (plan.some((w) => w.id === workout.id)) {
      toast("Already in today's plan");
      return;
    }
    if (plan.length >= MAX_PLAN) {
      toast.error("Today's plan is full (max 5)");
      return;
    }
    setPlan([...plan, workout]);
    toast.success("Added to today's plan");
  };

  const saveForLater = (workout: ILibrary) => {
    if (saved.some((w) => w.id === workout.id)) {
      toast("Already saved");
      return;
    }
    setSaved([...saved, workout]);
    toast.success("Saved for later");
  };

  const removeFromPlan = (id: number) => {
    setPlan(plan.filter((w) => w.id !== id));
  };

  const removeFromSaved = (id: number) => {
    setSaved(saved.filter((w) => w.id !== id));
  };

  const markAsDone = (id: number) => {
    setPlan(plan.filter((w) => w.id !== id));
    toast.success("Marked as done");
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#15171d",
            color: "#fff",
            border: "1px solid #222630",
          },
        }}
      />
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used inside PlanProvider");
  return ctx;
};