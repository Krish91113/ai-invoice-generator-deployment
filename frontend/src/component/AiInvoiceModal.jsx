import React, { useEffect, useState } from "react";
import { aiInvoiceModalStyles } from "../assets/dummyStyles";
import GeminiIcon from "./GeminiIcon";

function AiInvoiceModal({ open, onClose, onGenerate, initialText = "" }) {
  const [text, setText] = useState(initialText || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    () => {
      setText(initialText || "");
      setError("");
      setLoading(false);
    },
    [open, initialText]
  );
  if (!open) return null;
  async function handleGenerateLink() {
    setError("");
    const raw = String(text || "").trim();
    if (!raw) {
      setError("Please Paste invoice text to generate it from AI");
      return;
    }
    try {
      setLoading(true);
      const maybePromise = onGenerate && onGenerate(raw);
      if (maybePromise && typeof maybePromise === "function") {
        await maybePromise;
      }
    } catch (error) {
      console.error("OnGenerate handler failed", error);
      const msg =
        error &&
        (error.message ||
          (typeof error === "string" ? err : JSON.stringify(error)));
      setError(msg || "Failed to generate . Try again");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className={aiInvoiceModalStyles.overlay}>
      <div
        className={aiInvoiceModalStyles.backdrop}
        onClick={() => onClose && onClose()}
      ></div>
      <div className={aiInvoiceModalStyles.modal}>
        <div className="flex item-start justify-between">
          <div>
            <h3 className={aiInvoiceModalStyles.title}>
              <GeminiIcon className="w-6 h-6 group-hover:scale-110 transition-transform flex-none" />
              Create Invoice with AI
            </h3>
            <p className={aiInvoiceModalStyles.description}>
              Paste my text that contain invoice details (client, items,qty,
              prices) and we'll try to extract an invoice
            </p>
          </div>
          <button
            onClick={() => onClose && onClose()}
            className={aiInvoiceModalStyles.closeButton}
          >
            ✕
          </button>
        </div>
        <div className="mt-4">
          <label className={aiInvoiceModalStyles.label}>
            Paste Invoice text
          </label>
          <textarea name="" value={text} onChange={(e) => setText(e.target.value)}
            placeholder={`eg. A person wants a logo design for her organic brang "GreenVibe." Quoted for $120 for 2 logo options and final delivery in PNG and vector fromat `}
            id="" rows={8} className={aiInvoiceModalStyles.textarea}>

          </textarea>
        </div>
        {error && (
          <div className={aiInvoiceModalStyles.error} role="alert">
            {String(error)
              .split("\n")
              .map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            {(/quota|exhausted|resource_exhausted/i.test(String(error)) && (
              <div style={{ marginTop: 8, fontSize: 13, color: "#374151" }}>
                Tip: AI is temporarily unavailable (quota). Try again in a few
                minutes, or create the invoice manually.
              </div>
            )) ||
              null}
          </div>
        )}
        <div className={aiInvoiceModalStyles.actions}>
          <button
            type="button"
            onClick={() => onClose && onClose()}
            className={aiInvoiceModalStyles.cancelButton}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleGenerateLink}
            className={aiInvoiceModalStyles.generateButton}
            disabled={loading || !text.trim()}
          >
            {loading ? (
              <>
                <span className={aiInvoiceModalStyles.spinner}></span>
                Generating...
              </>
            ) : (
              <>
                <GeminiIcon className="w-5 h-5" />
                Generate Invoice
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AiInvoiceModal;
