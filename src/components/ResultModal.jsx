import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";

const ResultModal = ({ isOpen, onClose, resultData }) => {
  if (!resultData) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">GATE Result</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-3">
          <p><strong>Name:</strong> {resultData.name}</p>
          <p><strong>GATE ID:</strong> {resultData.gateId}</p>
          <p><strong>Branch:</strong> {resultData.branch}</p>
          <p><strong>Score:</strong> {resultData.score}</p>
          <p><strong>Rank:</strong> {resultData.rank}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResultModal;
