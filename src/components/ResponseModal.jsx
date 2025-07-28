import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { CheckCircle, AlertTriangle } from "lucide-react";

const ResponseModal = ({ isOpen, onClose, title, message, isSuccess }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            {isSuccess ? (
              <CheckCircle className="text-green-600" />
            ) : (
              <AlertTriangle className="text-yellow-600" />
            )}
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 text-gray-700 text-base">{message}</div>
      </DialogContent>
    </Dialog>
  );
};

export default ResponseModal;
