import {defineStore} from 'pinia';
import {createClient} from '@supabase/supabase-js';

const supabase = createClient('https://vrdqxnltrgnhwhmaimrv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyZHF4bmx0cmduaHdobWFpbXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwOTgyNjAsImV4cCI6MjAxMDY3NDI2MH0.177Z6JdlHv8DBlyKfQm9QmeUOsFz0XyjPfxKPtaBREg');

export const useStadiumStore = defineStore('stadium', {
    state: () => ({
        stadiums: [],
    }),

    actions: {
        async fetchStadiums() {
            const {data, error} = await supabase.from('stadiums').select('*');
            if (error) {
                throw error;
            }
            this.stadiums = data;
        },

        async addStadium(newStadium) {
            const {data, error} = await supabase.from('stadiums').upsert([newStadium]);
            if (error) {
                throw error;
            }
            this.stadiums.push(data[0]);
        },

        async deleteStadium(id) {
            const {error} = await supabase.from('stadiums').delete().eq('id', id);
            if (error) {
                throw error;
            }
            this.stadiums = this.stadiums.filter((stadium) => stadium.id !== id);
        },
    },
});
