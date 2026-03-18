import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  where,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import type { SlideImage, GalleryImage, MenuItem, BlogPost } from "@/types";

// Slides
export async function getSlides(): Promise<SlideImage[]> {
  const q = query(collection(db, "slides"), orderBy("order"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as SlideImage));
}

export async function addSlide(data: Omit<SlideImage, "id">) {
  return addDoc(collection(db, "slides"), data);
}

export async function updateSlide(id: string, data: Partial<SlideImage>) {
  return updateDoc(doc(db, "slides", id), data);
}

export async function deleteSlide(id: string) {
  return deleteDoc(doc(db, "slides", id));
}

// Gallery
export async function getGalleryImages(category?: "hair" | "kitsuke"): Promise<GalleryImage[]> {
  const constraints = [orderBy("order")];
  if (category) constraints.unshift(where("category", "==", category) as never);
  const q = query(collection(db, "gallery"), ...constraints);
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as GalleryImage));
}

export async function addGalleryImage(data: Omit<GalleryImage, "id">) {
  return addDoc(collection(db, "gallery"), data);
}

export async function deleteGalleryImage(id: string) {
  return deleteDoc(doc(db, "gallery", id));
}

// Menu
export async function getMenuItems(category?: MenuItem["category"]): Promise<MenuItem[]> {
  const constraints = [orderBy("order")];
  if (category) constraints.unshift(where("category", "==", category) as never);
  const q = query(collection(db, "menu"), ...constraints);
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as MenuItem));
}

export async function addMenuItem(data: Omit<MenuItem, "id">) {
  return addDoc(collection(db, "menu"), data);
}

export async function updateMenuItem(id: string, data: Partial<MenuItem>) {
  return updateDoc(doc(db, "menu", id), data);
}

export async function deleteMenuItem(id: string) {
  return deleteDoc(doc(db, "menu", id));
}

// Blog
export async function getBlogPosts(publishedOnly = true): Promise<BlogPost[]> {
  const constraints = [orderBy("createdAt", "desc")];
  if (publishedOnly) constraints.unshift(where("published", "==", true) as never);
  const q = query(collection(db, "blog"), ...constraints);
  const snap = await getDocs(q);
  return snap.docs.map((d) => {
    const data = d.data();
    return {
      id: d.id,
      ...data,
      createdAt: (data.createdAt as Timestamp).toDate(),
      updatedAt: (data.updatedAt as Timestamp).toDate(),
    } as BlogPost;
  });
}

export async function addBlogPost(data: Omit<BlogPost, "id">) {
  return addDoc(collection(db, "blog"), {
    ...data,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
}

export async function updateBlogPost(id: string, data: Partial<BlogPost>) {
  return updateDoc(doc(db, "blog", id), { ...data, updatedAt: Timestamp.now() });
}

export async function deleteBlogPost(id: string) {
  return deleteDoc(doc(db, "blog", id));
}
