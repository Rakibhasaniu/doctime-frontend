export type ISchedule = {
  [x: string]: any;
    id?: string;
    startDate: string;
    doctorId?:string;
    endDate: string;
    schedule:string;
    scheduleId?:string;
  };
  
  export type IScheduleFrom = {
    startDate: Date;
    endDate: Date;
    startTime: string;
    endTime: string;
  };
  