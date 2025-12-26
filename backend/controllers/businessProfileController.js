import { getAuth } from "@clerk/express";
import BusinessProfile from "../models/businessProfileModel";
import { data } from "react-router-dom";

const API_BASE = 'http://localhost:4000'

function uploadedFilesToUrls(req) {
  const urls = {};
  if (!req.files) return urls;

  const logoArr = req.files.logoName || req.files.logo || [];
  const stampArr = req.files.stampName || req.files.stamp || [];
  const sigArr = req.files.signatureNameMeta || req.files.signature || [];

  if (logoArr[0]) urls.logoUrl = `${API_BASE}/uploads/${logoArr[0].filename}`;
  if (stampArr[0]) urls.stampUrl = `${API_BASE}/uploads/${stampArr[0].filename}`;
  if (sigArr[0]) urls.signatureUrl = `${API_BASE}/uploads/${sigArr[0].filename}`;

  return urls;
}

//create a business profile

export async function createBusinessProfile(req, res) {

    try {
        const {userId} = getAuth(req);
        if(!userId){
            return res.status(401).json({success:false, message:"Authentication Reqquired"})
        }

        const body = req.body || {};
        const fileUrls= uploadedFilesToUrls(req);

         const profile = new BusinessProfile({
      owner: userId,
      businessName: body.businessName || "ABC Solutions",
      email: body.email || "",
      address: body.address || "",
      phone: body.phone || "",
      gst: body.gst || "",
      logoUrl: fileUrls.logoUrl || body.logoUrl || null,
      stampUrl: fileUrls.stampUrl || body.stampUrl || null,
      signatureUrl: fileUrls.signatureUrl || body.signatureUrl || null,
      signatureOwnerName: body.signatureOwnerName || "",
      signatureOwnerTitle: body.signatureOwnerTitle || "",
      defaultTaxPercent:
        body.defaultTaxPercent !== undefined ? Number(body.defaultTaxPercent) : 18,
    });

        const saved = await profile.save();
        return res.status(200).json({success: true, message: "Bussiness profile created successfully", data:saved})
    } catch (error) {
        console.log("create businessprofile error", error);
        return res.status(500).json({
            success : false,
            message : "Server error"
        })
    }
}

//to updated business profile
export async function updateBusinessProfile(params) {
    try {
        const {userId} = getAuth(req);
        if(!userId){
            return res.status(401).json({success:false, message:"Authentication Reqquired"})
        }
        
    } catch (error) {
        
    }
}