{{ XeFrontend::js('/assets/core/common/js/dynamicField.js')->appendTo('body')->load() }}

<div id="__xe_container_DF_setting_{{$group}}" class="table-responsive">
    <div class="pull-right">
        <button class="btn btn-primary __xe_btn_add" data-toggle="xe-modal">add</button>
    </div>

    <table class="table">
        <caption>DynamicField Manager</caption>
        <thead>
        <tr>
            <th>#</th>
            <th>ID</th>
            <th>Label</th>
            <th>Type</th>
            <th>Skin</th>
            <th>Use</th>
            <th>Config</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody class="__xe_tbody">
        <tr class="__xe_row" style="display:none">
            <td scope="row">#</td>
            <td class="__xe_column_id"></td>
            <td class="__xe_column_label"></td>
            <td class="__xe_column_typeName"></td>
            <td class="__xe_column_skinName"></td>
            <td class="__xe_column_use"></td>
            <td>
                <a class="text-light-blue __xe_btn_edit" href="#">Edit</a>
            </td>
            <td>
                <a class="text-red __xe_btn_delete" href="#">Delete</a>
            </td>
        </tr>
        </tbody>
    </table>

    <!-- Modal -->
    <div class="xe-modal fade __xe_df_modal" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="xe-modal">&times;</button>
                    <h4 class="modal-title">{{xe_trans('xe::dynamicField')}}</h4>
                </div>
                <div class="modal-body">
                    <p><!-- form --></p>
                </div>
                <div class="xe-modal-footer">
                    <button type="button" class="xe-btn xe-btn-secondary __xe_btn_close" data-dismiss="xe-modal">{{xe_trans('xe::cancel')}}</button>
                    <button type="button" class="xe-btn xe-btn-primary __xe_btn_submit">{{xe_trans('xe::submit')}}</button>
                </div>
            </div>
        </div>
    </div>

    <form class="__xe_add_form" action="{{ route('manage.dynamicField.store') }}" style="display:none" data-rule="dynamicFieldSection">
        <input type="hidden" name="group" value="{{$group}}" />
        @if ($revision === true)
            <input type="hidden" name="revision" value="true" />
        @endif
        <div class="step">
            <div class="form-group">
                <label for="">Type</label>
                <select name="typeId" class="form-control __xe_type_id">
                    <option value="">Select Item</option>
                    @foreach($fieldTypes as $fieldType)
                        <option value="{{ $fieldType::getId() }}">{{ $fieldType->name() }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="">ID</label>
                <input type="text" name="id" class="form-control">
            </div>
        </div>
        <div class="step">
            <div class="form-group">
                <label for="">Label</label>
                <div class="dynamic-lang-editor-box" data-name="label" data-lang-key=""></div>
            </div>
            <div class="form-group">
                <input type="hidden" name="use" value="true" />
                <input type="hidden" name="required" value="true" />
                <input type="hidden" name="sortable" value="true" />
                <input type="hidden" name="searchable" value="true" />
                <div class="checkbox mg-reset mg-bottom">
                    <label>
                        <input type="checkbox" class="__xe_checkbox-config" data-name="use" checked="checked"/>
                        Use
                    </label>
                </div>
                <div class="checkbox mg-reset mg-bottom">
                    <label>
                        <input type="checkbox" class="__xe_checkbox-config" data-name="required" checked="checked"/>
                        Rquired
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label for="">Skin</label>
                <select name="skinId" class="form-control __xe_skin_id" disabled="disabled">
                    <option value="">Select Type for getting skin options</option>
                </select>
            </div>
        </div>
        <div class="step __xe_additional_configure">
        </div>
    </form>
</div>

<script>
    var dynamicFieldData = {
        group: "{{$group}}",
        databaseName: "{{$databaseName}}",
        routes: {
            base: "{{ route('manage.dynamicField.index') }}",
            update: "{{ route('manage.dynamicField.update') }}",
            getEditInfo: "{{ route('manage.dynamicField.getEditInfo') }}",
            destroy: "{{ route('manage.dynamicField.destroy') }}",
            getSkinOption: "{{ route('manage.dynamicField.getSkinOption') }}",
            getAdditionalConfigure: "{{ route('manage.dynamicField.getAdditionalConfigure') }}"
        }
    };
</script>
