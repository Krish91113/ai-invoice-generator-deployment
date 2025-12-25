import mongoose from "mongoose";
import Invoice from "../models/invoiceModel.js";
import {getAuth} from '@clerk/express';

const API_BASE ='http://localhost:4000'

function computeTotal(items =[], taxPercent =0) {
    const safe = Array.isArray(items) ? items.filter(Boolean) : [];
    const subtotal = safe.reduce((sum, item) => sum + (Number(item.qty || 0) * Number(item.unitprice || 0)), 0);
    const tax = (subtotal * Number(taxPercent || 0)) / 100;
    const total = subtotal + tax;
    return { subtotal, tax, total };
}