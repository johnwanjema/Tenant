
<template>
    <section>
        <div class="content">
            <h2 class="content-heading">Messages</h2>
            <div class="block">
                <div class="block-header block-header-default">
                    <h3 class="block-title"><small></small></h3>
                    <router-link to="/teacher/addnotes" class="btn btn-success min-width-125"> Add Messages</router-link>
                    <!-- <button router-link='addnotes' type="button" class="btn btn-success min-width-125">Add Notes</button> -->
                </div>
                <div class="block-content block-content-full">
                    <!-- DataTables functionality is initialized with .js-dataTable-full class in js/pages/be_tables_datatables.min.js which was auto compiled from _es6/pages/be_tables_datatables.js -->
                    <div id="DataTables_Table_1_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <div class="dataTables_length" id="DataTables_Table_1_length">
                                    <label>
                                        Show
                                        <select v-model="perPage" name="DataTables_Table_1_length" aria-controls="DataTables_Table_1" class="custom-select custom-select-sm form-control form-control-sm">
                                            <option value="5">5</option>
                                            <option value="8">8</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                        </select>
                                        entries
                                    </label>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <div id="DataTables_Table_1_filter" class="dataTables_filter">
                                    <label>Search:<input v-model="filter" type="search" class="form-control form-control-sm" placeholder="" aria-controls="DataTables_Table_1" /></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <b-table responsive striped hover show-empty :items="messages" :fields="fields" :per-page="perPage" :current-page="currentPage" :filter="filter" :filterIncludedFields="filterOn" @filtered="onFiltered">
                                    <template v-slot:cell(#)="row">
                                        <p>{{row.index + 1}}</p>
                                    </template>
                                    <template v-slot:cell(actions)="row">
                                        <b-button class="btn btn-sm" variant="primary" >
                                            View
                                        </b-button>
                                        <b-button class="btn btn-sm" variant="warning">
                                            Edit
                                        </b-button>
                                    </template>
                                </b-table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-5">
                                <!-- <div class="dataTables_info" id="DataTables_Table_1_info" role="status" aria-live="polite">Showing 1 to 8 of 20 entries</div> -->
                            </div>
                            <div class="col-sm-12 col-md-7">
                                <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_1_paginate">
                                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" id="modal-large" tabindex="-1" role="dialog" aria-labelledby="modal-large" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <form @submit.prevent="updateUnit">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">Update Message</h3>
                                <div class="block-options">
                                    <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                        <i class="si si-close"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content">
                                <div class="form-group">
                                    <label class="col-12" for="example-text-input">Tenants</label>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-alt-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-alt-success">
                                Update Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    data() {
        return {
            currentPage: 1,
            perPage: 5,
            items: [],
            fields: ['#', { key: 'Full Name',  }, { key: 'phoneNumber', }, { key: 'email', },'message','date' ,{ key: 'actions', label: 'Actions' }],
            messages: [{}],
            filter: null,
            filterOn: [],
            form: new Form({

            }),
        }
    },
    computed: {
        rows() {
            return this.messages.length
        }
    },
    methods: {
        openVIewModal(note) {
            $('#modal').modal('show');
            this.form.fill(note)
        },
        updateUnit() {

        },
        openModal(note) {
            $('#modal-large').modal('show');
            this.form.fill(note)
        },
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = 1
        },
        getUnits() {
           
        }
    },
    created() {
        this.getUnits();
    }
}
</script>