import React, { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import FormWizard from "./forms/FormWizard";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "motion/react";
import config from "../config";

export const DragCloseModal = ({ title }: { title: string }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="grid h-full w-full max-w-[1440px]">
      <button
        onClick={() => setOpen(true)}
        className="rounded p-2 transition-colors border-none "
      >
        {title}
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto h-2/3 max-w-2xl space-y-2 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            get a tailored solution
          </h2>
          <h3 className="text-lg font-bold text-neutral-200">
            give us the details, and we'll get back to you with a bespoke plan
          </h3>
          <FormWizard
            steps={config.forms.enquire.steps}
            defaultValues={config.forms.enquire.defaultValues}
            onSubmit={(values) => console.log(values)} // todo
          />
        </div>
      </DragCloseDrawer>
    </div>
  );
};

const DragCloseDrawer = ({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70 cursor-default max-w-[1440px] mx-auto "
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[65vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing border-none"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
