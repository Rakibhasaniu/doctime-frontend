export type ISchedule = {
    id?: string;
    startDate: string;
    doctorId?:string;
    endDate: string;
    // schedule:string;
  };
  
  export type IScheduleFrom = {
    startDate: Date;
    endDate: Date;
    startTime: string;
    endTime: string;
  };
  