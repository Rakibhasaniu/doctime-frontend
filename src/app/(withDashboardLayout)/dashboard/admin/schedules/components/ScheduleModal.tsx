
import DtDatePicker from "@/components/forms/DtDatePicker";
import DtForm from "@/components/forms/DtForm";
import DtTimePicker from "@/components/forms/DtTimePicker";
import Modal from "@/components/shared/Modal/Modal";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const [createSchedule] = useCreateScheduleMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    // console.log(values);
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);
    // console.log(values);
    try {
      const res = await createSchedule(values).unwrap();
      // console.log(res);
      if (res?.length) {
        toast.success("Schedules created successfully!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Create Schedule">
      <DtForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2} sx={{ width: "400px" }}>
          <Grid item md={12}>
            <DtDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid item md={12}>
            <DtDatePicker name="endDate" label="End Date" />
          </Grid>
          <Grid item md={6}>
            <DtTimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid item md={6}>
            <DtTimePicker name="endTime" label="End Time" />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }}>
          Create
        </Button>
      </DtForm>
    </Modal>
  );
};

export default ScheduleModal;
