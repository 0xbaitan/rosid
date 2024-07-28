import { createWorker } from "@/lib/tesseract.js-5.0.5";
import receiptParsingChain from "../ai";
import { PossiblyNull } from "@/types";
import { Receipt } from "../types";
import { isReceipt } from "./validator";

export default class ReceiptScanner {
  public static async scanImage(
    imageSrc: string
  ): Promise<PossiblyNull<Receipt>> {
    const worker = await createWorker("eng");
    const ret = await worker.recognize(imageSrc);
    await worker.terminate();
    const scannedText = ret.data.text;
    return ReceiptScanner.parseReceipt(scannedText);
  }

  private static async parseReceipt(
    scannedText: string
  ): Promise<PossiblyNull<Receipt>> {
    let output = await receiptParsingChain.invoke({
      input: scannedText,
    });
    output = output.replace(/```json|```/g, "");
    let receipt = JSON.parse(output);
    if (receipt === null) {
      return null;
    }

    receipt = receipt[0];

    if (!isReceipt(receipt)) {
      return null;
    }

    console.log(JSON.stringify(receipt, null, 2));
    return receipt;
  }
}
